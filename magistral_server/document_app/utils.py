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


def get_list_id_items(ID):
    item = DocumentMenu.objects.get(pk=ID)
    print(f'{item=}')
    print(f'{item.id=}')
    if not item.parent:
        [item.id].extend(get_list_id_items(ID))
    if not item.submenu:
        return [item.id]
    lst = [menu.id for menu in item.submenu.all()]
    print(f'{lst=}')
    return lst
