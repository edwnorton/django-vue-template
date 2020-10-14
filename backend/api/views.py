from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache
from rest_framework import viewsets, filters
from django.http import JsonResponse

from .models import Message, MessageSerializer


# Serve Vue Application
index_view = never_cache(TemplateView.as_view(template_name='index.html'))


class MessageViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows messages to be viewed or edited.
    """
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('subject', 'body')


def get_test_date(request):
    if request.method == 'GET':
        mess = list(Message.objects.values('subject', 'body'))
    return JsonResponse({'data': mess})


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('subject',)