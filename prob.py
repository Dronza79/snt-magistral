class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.friends = []
        self.stop_req = 0

    def __str__(self):
        return self.name

    def to_dist(self):
        self.stop_req += 1
        if self.stop_req > 2:
            # self.stop_req = False
            return f'сам {self}'
        return {
            'name': self.name,
            'age': self.age,
            'friends': [person.to_dist() for person in self.friends]
        }

    def add_friend(self, obj):
        if obj not in self.friends:
            self.friends.append(obj)
            obj.add_friend(self)
        else:
            return 'Уже друзья'


bob = Person('Боб', '12')
nik = Person('Ник', '13')
rob = Person('Роб', '11')

bob.add_friend(rob)
rob.add_friend(nik)
nik.add_friend(bob)

# print(bob.__dict__)
# print(nik.__dict__)
# print(rob.__dict__)
print(bob.to_dist())

TIP = {
    'name': 'Боб',
    'age': '12',
    'friends': [
        {'name': 'Роб',
         'age': '11',
         'friends': [
             'сам Боб',
             {'name': 'Ник',
              'age': '13',
              'friends': [
                  'сам Роб'
              ]}
         ]}
    ]}

di = {'name': 'Боб', 'age': '12', 'friends': [{'name': 'Роб', 'age': '11', 'friends': ['сам Боб', {'name': 'Ник', 'age': '13', 'friends': ['сам Роб', 'сам Боб']}]}, 'сам Ник']}