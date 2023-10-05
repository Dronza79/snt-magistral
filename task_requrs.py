# def set_mptt(self, queryset=None, level=1):
#     if not queryset:
#         self.submenu.all().update(order_parent=self.order_parent, level=level)
#         level += 1
#         for child in self.submenu.all().order_by('position'):
#             order_str = f'{self.order_parent}{child.parent.position}{child.position}'
#             self.submenu.all().filter(pk=child.pk).update(order=order_str)
#             if child.submenu.exists():
#                 child.submenu.all().update(order_parent=self.order_parent)
#                 child.set_mptt(level=level)
#     else:
#         for i, menu in enumerate(queryset.order_by('position'), start=1):
#             # level = 1
#             order_str = f'{i}00'
#             queryset.filter(pk=menu.pk).update(order_parent=i, level=level, order=order_str, position=i)
#             if menu.submenu.exists():
#                 level = 2
#                 menu.set_mptt(level=level)

# def set_mptt(self, queryset=None, level=1):
#     for i, menu in enumerate(queryset.order_by('position'), start=1):
#         order_str = f'{i}00' if not menu.parent else f'{menu.parent.positon}{i}0' if menu.submenu else f'{menu.parent.parent.position}{menu.parent.position}{i}'
#         queryset.filter(pk=menu.pk).update(order_parent=i, level=level, order=order_str, position=i)
#         if menu.submenu.exists():
#             level += 1
#             qs = menu.submenu.all()
#             menu.set_mptt(level=level, queryset=qs)
