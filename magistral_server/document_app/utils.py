import io

import mammoth
from xlsx2html import xlsx2html

from site_settings.models import DocumentMenu


def get_html_string(file):
    ext = file.name.split('.')[-1].lower()
    print(f'{ext=}')
    print(f'{type(file)=}')
    if ext == 'docx':
        data = mammoth.convert_to_html(file)
        return data.value
    elif ext == 'xlsx':
        data = io.StringIO()
        xlsx2html(file, data, locale='en')
        data.seek(0)
        return data.read()
    else:
        return ''


def get_list_id_items(number):
    if not number:
        return DocumentMenu.objects.none()
    item = DocumentMenu.objects.get(pk=number)
    if not item.submenu:
        return [item.id]
    lst = [item.id]
    for sub in item.submenu.all():
        lst.extend(get_list_id_items(sub.id))
    return lst
