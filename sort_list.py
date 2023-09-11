def split_list(arr):
    min_list = []
    max_list = []
    mid_list = []
    ref_elm = arr[-1]
    for i in arr:
        if i > ref_elm:
            max_list.append(i)
        elif i < ref_elm:
            min_list.append(i)
        else:
            mid_list.append(i)
    print(f'{min_list=}, {mid_list=}, {max_list=}, {ref_elm=} ')
    return min_list, mid_list, max_list


def sort_list(data):
    ml, md, mx = split_list(data)
    if ml:
        ml = sort_list(ml)
    if mx:
        mx = sort_list(mx)
    return ml+md+mx


arr = [6, 7, 8, 4, 2, 7, 5, 3]

print(sort_list(arr))

