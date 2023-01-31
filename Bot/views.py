from django.shortcuts import render
from django.http import HttpResponse
import datetime

def home(request):
    d = datetime.datetime.now()
    name=""
    if request.method=="POST":
        name=request.POST['name']
    content ={
        't1' : d,
        'na' : name
    }
    return render(request,'fi.html',content)

def output(request):
    import whisper
    import spacy
    nlp=spacy.load('en_core_web_md')

    model = whisper.load_model("base")
    result = model.transcribe("D:/Downloads/test.webm")
    print(result["text"])

    def remove_stopwords(text):
        doc = nlp(text.lower()) 
        result = [] 
        for token in doc: 
            if token.text in nlp.Defaults.stop_words: 
                continue
            result.append(token.text)
        return " ".join(result) 

    doc1=nlp(result["text"])
    doc2=nlp("Arrays are stored in contegious memory locations and array starting index is 0.")
    doc3=nlp(remove_stopwords(result["text"]))

    a=doc2.similarity(doc1)
    b=int(a*100)
    return render(request,'se.html',{'val':b})

def valid(request):
    return render(request,'form.html')


