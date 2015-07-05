# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='user',
            fields=[
                ('_id', models.AutoField(primary_key=True, serialize=False)),
                ('uuid', models.UUIDField(max_length=32)),
                ('username', models.CharField(max_length=20)),
                ('password', models.CharField(max_length=80)),
                ('email', models.EmailField(max_length=254)),
                ('image', models.ImageField(upload_to='')),
                ('level', models.IntegerField()),
            ],
        ),
    ]
