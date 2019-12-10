
from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView
from Template.forms import RawForm
from django.contrib import messages
import gensim
import nltk
nltk.download('punkt')
from nltk.tokenize import word_tokenize
#test
# Create your views here.
#soemthing change
def Home_view(request):
    raw_documents = ["What subject I need to register",
                    "Subject that I can register",
                    "Course that I should register",
                    "I want to register Jalinan Masyarakat subject",
                    "should I take Information literacy","can I take Information literacy",
                    "anything related to library subject Information literacy",
                "Can I register Social Engagement","can I take Social Engagement",
                "can I take Ethnic Relation","I want to register Ethnic Relation",
                "subject related to community Social Engagement",
                "I want to register a subject",
                "I want to take Ethnic Relation",
                "Can I take TITAS Tamadun Islam Subject",
                "subject Islam and Asia Civilisation Tamadun Islam",
                "subject about Islamic Civilization Tamadun Islam",
                "I want to take Basic Entrepreneurship APK","should I take Basic Entrepreneurship APK",
                "subject about business Pembudayaan Keusahawanan",
                "subjec about ethnics Ethnic Relation",
                "subject about culture Ethnic Relation",
                "subject about Malaysia Introduction to Malaysia"]
    print("Number of documents:",len(raw_documents))

    my_form=RawForm()
    my_text=""
    if request.method=="POST":
        my_form = RawForm(request.POST)

        if my_form.is_valid():
            my_text=my_form.cleaned_data['s']
            gen_docs = [[w.lower() for w in word_tokenize(text)]
                for text in raw_documents]
            
            dictionary = gensim.corpora.Dictionary(gen_docs)
            for i in range(len(dictionary)):
                print(i, dictionary[i])
   
            corpus = [dictionary.doc2bow(gen_doc) for gen_doc in gen_docs]
            tf_idf = gensim.models.TfidfModel(corpus)
            s = 0
            for i in corpus:
                s += len(i)
            sims = gensim.similarities.Similarity('Documents',tf_idf[corpus],
                                        num_features=len(dictionary))
            query_doc = [w.lower() for w in word_tokenize(my_text)]
            print(query_doc)
            query_doc_bow = dictionary.doc2bow(query_doc)
            print(query_doc_bow)
            query_doc_tf_idf = tf_idf[query_doc_bow]
            print(query_doc_tf_idf)

            print(sims[query_doc_tf_idf])
            index1=[]
            maxi=[]
            for i in range (23):
                index1.append(sims[query_doc_tf_idf][i])

            maxim=index1.index(max(index1))
            print(maxim)
            print(raw_documents[maxim])
            if index1[maxim]>0.5:
                my_text=raw_documents[maxim]
                print(my_text)
            else:
                my_text="nothing"
                print(my_text)
            
            

    

    return render(request, "Home.html",{"my_form":my_form , "my_text":my_text})


def TableResult_view(request):
    return render(request,"TableResult.html")