from django.contrib import admin

from forum_app.models import Post, Comment


class CommentInline(admin.StackedInline):
    model = Comment
    fields = ('post', 'comment', 'content', ('author', 'publisher',),)
    extra = 0


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = [
        'title', 'create_at', 'edit_at',
        'active', 'hidden', 'author', 'publisher'
    ]
    list_display_links = ['title']
    list_editable = ['active', 'hidden']
    fieldsets = (
        (None, {"fields": ("title", "content")}),
        ("Модерация", {"fields": (('active', "hidden"),),
                       'classes': ('collapse',),
                       }),
        ("Связи", {"fields": (("author", "publisher"),)})
    )
    inlines = CommentInline,


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = [
        '__str__', 'create_at', 'edit_at',
        'hidden', 'author', 'publisher'
    ]
    list_display_links = ['__str__']
    list_editable = ['hidden']
    fields = ('post', 'content', ('author', 'publisher',),)
    inlines = CommentInline,


