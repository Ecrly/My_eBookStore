from django.db import models
from django.contrib import admin
# Create your models here.

class User(models.Model):
    user_name = models.CharField(max_length=30)
    password = models.CharField(max_length=30)
    tel = models.IntegerField()
    address = models.CharField(max_length=50)
    def __str__(self):
        return str(self.user_name);

class User_abs(admin.ModelAdmin):
    list_display = ('user_name', 'password', 'tel', 'address')
    search_fields = ('user_name',)

class Book(models.Model):
    book_name = models.CharField(max_length=30)
    author = models.CharField(max_length=30)
    abstract = models.TextField()
    price = models.IntegerField()
    stock = models.IntegerField()
    solid = models.IntegerField()
    classify = models.CharField(max_length=30)

class Book_abs(admin.ModelAdmin):
    list_display = ('book_name', 'author', 'price', 'stock', 'solid', 'classify')
    search_fields = ('book_name', 'author')
    list_filter = ('classify',)

class Order(models.Model):
    customer = models.CharField(max_length=30)
    orded_book = models.CharField(max_length=30)
    number = models.IntegerField()
    order_value = models.IntegerField()
    time = models.DateTimeField()
    status = models.IntegerField()

class Order_abs(admin.ModelAdmin):
    list_display = ('customer', 'orded_book', 'number', 'time', 'status')
    search_fields = ('customer', 'orded_book')
    list_filter = ('status',)

class ShopCar(models.Model):
    ShopCar_user = models.CharField(max_length=30);
    Shops = models.CharField(max_length=30);

class News(models.Model):
    content = models.CharField(max_length=50);
    update_time = models.DateTimeField()

class News_abs(admin.ModelAdmin):
    list_display = ('update_time', 'content');

admin.site.register(User, User_abs)
admin.site.register(Book, Book_abs)
admin.site.register(Order, Order_abs)
admin.site.register(News, News_abs)

