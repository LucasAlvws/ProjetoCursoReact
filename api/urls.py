from django.contrib import admin
from django.urls import path, include
from .views import ArticleViewSet
from rest_framework.routers import DefaultRouter

#ArticleList, ArticleDetails


router = DefaultRouter()
router.register('articles', ArticleViewSet, basename='articles')

urlpatterns = [
    path('', include(router.urls)),
    #path('articles/', ArticleList.as_view()),
    #path('articles/<int:id>/', ArticleDetails.as_view()),
    #path('articles/', ArticleList),
    #path('articles/<int:pk>', article_details),
]