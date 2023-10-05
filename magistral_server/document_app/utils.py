import io

import mammoth
from xlsx2html import xlsx2html


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
