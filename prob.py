class Person:
    class_depth = 0

    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.friends = []
        self.stop_req = 1

    def __str__(self):
        return self.name

    # def to_dist(self):
    #     self.stop_req += 1
    #     if self.stop_req > 2:
    #         # self.stop_req = False
    #         return f'сам {self}'
    #     return {
    #         'name': self.name,
    #         'age': self.age,
    #         'friends': [person.to_dist() for person in self.friends]
    #     }
    # def to_dist(self):
    #     self.stop_req += 1
    #     if self.stop_req > len(self.friends) - 1:
    #         return {
    #             'name': self.name,
    #             'age': self.age,
    #         }
    #     return {
    #         'name': self.name,
    #         'age': self.age,
    #         'friends': [person.to_dist() for person in self.friends]
    #     }
    def to_dist(self):
        Person.class_depth += 1
        if Person.class_depth > len(self.friends):
            return {
                'name': self.name,
                'age': self.age,
            }
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
ket = Person('Кати', '10')

bob.add_friend(rob)
rob.add_friend(nik)
nik.add_friend(bob)
ket.add_friend(nik)
ket.add_friend(bob)
ket.add_friend(rob)

# print(bob.__dict__)
# print(nik.__dict__)
# print(rob.__dict__)
print(bob.to_dist())

MEMBER = {'name': 'Боб',
          'age': '12',
          'friends': [
              {'name': 'Роб',
               'age': '11',
               'friends': [
                   {'name': 'Боб', 'age': '12'},
                   {'name': 'Ник', 'age': '13'},
                   {'name': 'Кати', 'age': '10'}
               ]},
              {'name': 'Ник',
               'age': '13',
               'friends': [
                   {'name': 'Роб', 'age': '11'},
                   {'name': 'Боб', 'age': '12'},
                   {'name': 'Кати', 'age': '10'}
               ]},
              {'name': 'Кати',
               'age': '10',
               'friends': [
                   {'name': 'Ник', 'age': '13'},
                   {'name': 'Боб', 'age': '12'},
                   {'name': 'Роб', 'age': '11'}
               ]}
          ]},


cl = {'name': 'Боб',
      'age': '12',
      'friends': [
          {'name': 'Роб',
           'age': '11',
           'friends': [
               {'name': 'Боб',
                'age': '12',
                'friends': [
                    {'name': 'Роб', 'age': '11'},
                    {'name': 'Ник', 'age': '13'},
                    {'name': 'Кати', 'age': '10'}
                ]},
               {'name': 'Ник', 'age': '13'},
               {'name': 'Кати', 'age': '10'}
           ]},
          {'name': 'Ник', 'age': '13'},
          {'name': 'Кати', 'age': '10'}
      ]}
