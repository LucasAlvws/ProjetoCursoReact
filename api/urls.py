from django.contrib import admin
from django.urls import path
from .views import ArticleList, ArticleDetails

urlpatterns = [
    path('articles/', ArticleList.as_view()),
    path('articles/<int:id>/', ArticleDetails.as_view()),
    #path('articles/', ArticleList),
    #path('articles/<int:pk>', article_details),
]