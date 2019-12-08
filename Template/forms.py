from django import forms

class RawForm(forms.Form):
    s= forms.CharField(widget=forms.TextInput(
        attrs={
            'id':'search',
            'list':'alist',
            'placeholder':"Eg. What subject I need to register"
        }
    ))
