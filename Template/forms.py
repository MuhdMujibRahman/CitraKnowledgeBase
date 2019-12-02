from django import forms

class RawForm(forms.Form):
    Search = forms.CharField(widget=forms.TextInput(
        attrs={
            'id':'search'
        }
    ))
