from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import pandas
import numpy as np

app = FastAPI()

class RequestFields(BaseModel):
    bookName: str

with open('artifacts/book_names.pkl', 'rb') as f:
    book_names = pickle.load(f)

with open('artifacts/book_pivot.pkl', 'rb') as f:
    book_pivot = pickle.load(f)

with open('artifacts/final_rating.pkl', 'rb') as f:
    final_rating = pickle.load(f)
    
with open('artifacts/model.pkl', 'rb') as f:
    model = pickle.load(f)

def recommend_book(book_name):
    book_id = np.where(book_pivot.index == book_name)[0][0]
    distance, suggestion = model.kneighbors(book_pivot.iloc[book_id,:].values.reshape(1,-1), n_neighbors=6 )
    list = []
    for i in range(len(suggestion)):
        books = book_pivot.index[suggestion[i]]
        for j in books:
            if j == book_name:
                print(f"You searched '{book_name}'\n")
                print("The suggestion books are: \n")
            else:
                list.append(j)
                print(j)
    return list

@app.post('/')
async def recommend(req:RequestFields):
    bookname = req.bookName
    legit = bookname in book_names
    if legit: 
        result = recommend_book(req.bookName)
        return { "recommendations": result, "number": len(result) }
    else:
        return { "error": "Something went wrong", "number": 0  }
        