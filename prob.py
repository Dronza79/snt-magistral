class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.friends = []

    def to_dist(self):
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
nik.add_friend(bob)

print(bob.__dict__)
print(nik.__dict__)
print(rob.__dict__)
print(rob.to_dist())
