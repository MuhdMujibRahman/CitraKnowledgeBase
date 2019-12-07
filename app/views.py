from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView
from Template.forms import RawForm
import gensim
import nltk
nltk.download('punkt')
from nltk.tokenize import word_tokenize
#test
# Create your views here.
def Home_view(request):
    my_form=""
    if request.method=="POST":
        my_form = request.POST.get('search', None)
        print(my_form)

   

    raw_documents = ["What subject I need to register",
                    "I want to register Jalinan Masyarakat subject",
                "Can I register Social Engagement",
                "I want to register a subject",
                "I want to take Ethnic Relation",
                "Can I take Tamadun Islam Subject"]
    print("Number of documents:",len(raw_documents))

    gen_docs = [[w.lower() for w in word_tokenize(text)]
                for text in raw_documents]
    print(gen_docs)

    dictionary = gensim.corpora.Dictionary(gen_docs)
    print(dictionary[5])
    print(dictionary.token2id['register'])
    print("Number of words in dictionary:",len(dictionary))
    for i in range(len(dictionary)):
        print(i, dictionary[i])

    corpus = [dictionary.doc2bow(gen_doc) for gen_doc in gen_docs]
    print(corpus)

    tf_idf = gensim.models.TfidfModel(corpus)
    print(tf_idf)
    s = 0
    for i in corpus:
        s += len(i)
    print(s)

    sims = gensim.similarities.Similarity('/static/Documents/test.txt',tf_idf[corpus],
                                        num_features=len(dictionary))
    print(sims)
    print(type(sims))

    query_doc = [w.lower() for w in word_tokenize(my_form)]
    print(query_doc)
    query_doc_bow = dictionary.doc2bow(query_doc)
    print(query_doc_bow)
    query_doc_tf_idf = tf_idf[query_doc_bow]
    print(query_doc_tf_idf)

    print(sims[query_doc_tf_idf])
    index=[]
    index.append(sims[query_doc_tf_idf][0])
    index.append(sims[query_doc_tf_idf][1])
    index.append(sims[query_doc_tf_idf][2])
    index.append(sims[query_doc_tf_idf][3])
    index.append(sims[query_doc_tf_idf][4])
    for i in range(len(index)):
        if index[i]>0.5:
            print(i)
            my_form=raw_documents[i]
            print(my_form)
            
    return render(request, "Home.html",{"my_form":my_form})


def TableResult_view(request):
    return render(request,"TableResult.html")