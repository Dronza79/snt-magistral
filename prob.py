class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.friends = []
        self.requrs_stop = 0

    def __repr__(self):
        return self.name

    # def to_dist(self):
    #     return {
    #         'name': self.name,
    #         'age': self.age,
    #         'friends': [person.to_dist() for person in self.friends]
    #     }

    def to_dist(self):
        self.requrs_stop += 1
        if self.requrs_stop > 1:
            return f'Сам {self.name}'
        else:
            return {
                'name': self.name,
                'age': self.age,
                'friends': [person.to_dist() for person in self.friends]
            }

    def add_friend(self, obj):
        if obj not in self.friends:
            self.friends.append(obj)
            # print(self)
            # print(obj)
            obj.add_friend(self)
        else:
            return 'Уже друзья'


bob = Person('Боб', '12')
nik = Person('Ник', '13')
rob = Person('Роб', '11')

bob.add_friend(rob)
rob.add_friend(nik)
# nik.add_friend(bob)

# print(bob.__dict__)
# print(nik.__dict__)
# print(rob.__dict__)
print(bob.to_dist())

TIP = {
    'name': 'Роб',
    'age': '11',
    'friends': [
        {
            'name': 'Боб',
            'age': '12',
            'friends': [
                None,
                {
                    'name': 'Ник',
                    'age': '13',
                    'friends': [None]}]}]}