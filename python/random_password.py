import random
import string
length = random.randint(6,10)
password = random.choice(string.ascii_letters)
for i in range(length):
    a = random.choice(string.ascii_letters)
    n = random.choice(string.digits)
    password += a
    password += n

shufPass = ''.join(random.sample(password, len(password)))
print(shufPass)
