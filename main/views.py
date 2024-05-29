from django.shortcuts import render, HttpResponse, redirect

def index(request):
    return render(request, 'index.html')

def training(request):
    return render(request, 'training.html')

def materials(request):
    return render(request, 'materials.html')

def faq(request):
    return render(request, 'faq.html')




