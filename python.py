from abc import ABC, abstractmethod

# Base Class: Abstraction and Encapsulation
class Animal(ABC):
    def __init__(self, name):
        self.name = name
        self.__energy = 100  # Private variable (Encapsulation)

    @abstractmethod
    def make_sound(self):  # Abstract method (Abstraction)
        pass

    def get_energy(self):  # Getter method to safely access private data
        return self.__energy


# Child Class 1: Inheritance and Polymorphism
class Dog(Animal):
    def make_sound(self):  # Polymorphism
        return "Woof! Woof!"


# Child Class 2: Inheritance and Polymorphism
class Cat(Animal):
    def make_sound(self):  # Polymorphism
        return "Meow! Meow!"


# Execution
dog = Dog("Buddy")
cat = Cat("Kitty")

print(dog.name, "says:", dog.make_sound())
print("Energy level:", dog.get_energy())

print(cat.name, "says:", cat.make_sound())
print("Energy level:", cat.get_energy())