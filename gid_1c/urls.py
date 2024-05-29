from django.contrib import admin
from django.urls import path, include
from main import views

urlpatterns = [
    path('', views.index, name='index'),
    path('training/', views.training, name='training'),
    path('materials/', views.materials, name='materials'),
    path('faq/', views.faq, name='faq'),
    path('admin/', admin.site.urls),
]



