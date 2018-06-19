"""My_eBookStore URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.conf import settings
from Store.views import *

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^regist/$', regist),
    url(r'^show/$',show),
    url(r'^search/$',search),
    url(r'^login/$',login),
    url(r'^test/$',test),
    url(r'^logout/$',logout),
    url(r'^main/$', main),
    url(r'^show/$', show),
    url(r'^show_detail/$', show_detail),
    url(r'^order/$', order),
    url(r'^confirm/$', confirm),
    url(r'^get_news/$', get_news),
    url(r'^get_information/$', get_information),
]






