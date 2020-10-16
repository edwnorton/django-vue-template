# Generated by Django 2.1.4 on 2020-10-14 07:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='AlertGroup',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('group', models.CharField(max_length=50)),
                ('number', models.TextField()),
            ],
            options={
                'db_table': 'AlertGroup',
            },
        ),
    ]