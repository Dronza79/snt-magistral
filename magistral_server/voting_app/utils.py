def get_data_for_check(obj):
    return obj.id, list(map(lambda x: x.id, obj.answers.all()))


def check_data(obj):
    # print(f'{obj=}')
    que = obj[0][0]
    ans = obj[0][1]
    req = obj[1]
    return all([que == req.get('question'), req.get('value') in ans])
