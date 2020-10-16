"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
"""

from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from .api.views import index_view, MessageViewSet, get_test_date, GroupViewSet, UpdateGroup

from django.conf.urls import url

router = routers.DefaultRouter()
router.register('messages', MessageViewSet)
router.register(r'groups', GroupViewSet)
# router.register(r'groupsupdate', UpdateGroup)

urlpatterns = [

    # http://localhost:8000/
    path('', index_view, name='index'),

    # http://localhost:8000/api/<router-viewsets>
    path('api/', include(router.urls)),

    # http://localhost:8000/api/admin/
    path('api/admin/', admin.site.urls),

    path('api/get_data/', get_test_date, name='get_test_date'),

    url(r'^api/groups/(?P<pk>\d+)/edit/$', UpdateGroup.as_view(), name='update'),
]


