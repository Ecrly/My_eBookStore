from django.shortcuts import render
from django.shortcuts import *
from django.http import *
from Store.models import *
from django.utils import timezone
import json
import datetime
def main(request):
    return render(request, 'Store/main.html');

def regist(request):
    name = request.POST['name'];
    password = request.POST['password'];
    is_exit = User.objects.filter(user_name = name);
    if(is_exit.exists()):
        a = "is___exist";
    else:
        a = name;
        request.session['cur_user'] = name;
        # User.objects.create(user_name = name);
    return HttpResponse(a);

def login(request):
    name = request.POST.get('name');
    pas = request.POST.get('password');
    user_s = User.objects.filter(user_name=name);
    if(user_s.exists()):
        for user in user_s:
             if(user.password == pas):
                 name = name;
                 request.session.set_expiry(0)
                 request.session["cur_user"] = name;
             else:
                 name = "is___wrong";
    else:
        name = "is___wrong";
    return HttpResponse(name);

def logout(request):
    del request.session['cur_user'];
    return HttpResponse()

def show(request):
    type = request.POST['type'];
    if(type == 'english'):
        classify = 1;
    elif(type == 'computer'):
        classify = 2;
    elif(type == 'others'):
        classify = 3;
    books = Book.objects.filter(classify = classify);
    elems = [];
    for book in books:
        elem = {"name": book.book_name, "price": book.price};
        elems.append(elem);
    dict = {"elems": elems};
    return HttpResponse(json.dumps(dict), content_type='application/json');

def test(request):
    name = request.session.get('cur_user', False)
    return HttpResponse(name);

def search(request):
    name = request.POST['name'];
    books = Book.objects.filter(book_name__contains= name);
    elems = [];
    for book in books:
        elem = {"name": book.book_name, "price": book.price};
        elems.append(elem);
    dict = {"elems": elems};
    return HttpResponse(json.dumps(dict), content_type='application/json');

def show_detail(request):
    name = request.GET['name'];
    book = Book.objects.get(book_name = name);
    cur_user = request.session.get('cur_user', False)
    #elem = {"name": book.book_name, "price": book.price, "author" : book.author, "abstract" : book.abstract, "stock" : book.stock, "solid" : book.solid};
    dict = {"elem": book, 'cur_user':cur_user};
    return render_to_response('Store/Base/Book/show_detail.html/', dict);

def order(request):
    user = request.POST['user_name'];
    book = request.POST['book_name'];
    price = Book.objects.get(book_name=book).price;
    time = timezone.now();
    Order.objects.create(customer = user, orded_book = book, number = 1, order_value = price, time = time, status = 0);
    return HttpResponse(1);

def confirm(request):
    user_name = request.POST['user_name'];
    user = User.objects.get(user_name = user_name);
    elem = {"name": user.user_name, "tel": user.tel, "address": user.address};
    dict = {'elem': elem};
    return HttpResponse(json.dumps(dict), content_type='application/json');

def get_news(request):
    news = News.objects.all();
    elems = [];
    for new in news:
        elem = {"content": new.content};
        elems.append(elem);
    dict = {"elems": elems};
    return HttpResponse(json.dumps(dict), content_type='application/json');

def get_information(request):
    name = request.session.get('cur_user', False);
    user = User.objects.get(user_name= name);
    elem = {"name": user.user_name, "tel": user.tel, "address": user.address, "password": user.password};
    dict = {'elem': elem};
    return render_to_response('Store/Base/User/base_information.html', dict);
