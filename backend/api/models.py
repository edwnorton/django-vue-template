from django.db import models
from rest_framework import serializers


class Message(models.Model):
    subject = models.CharField(max_length=200)
    body = models.TextField()


class MessageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Message
        fields = ('url', 'subject', 'body', 'pk')


class AlertGroup(models.Model):
    group = models.CharField(max_length=50)
    number = models.TextField()

    class Meta:
        db_table = 'AlertGroup'


class AlertGroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = AlertGroup
        fields = ('url', 'group', 'number', 'pk')