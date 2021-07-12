def is_prime(x):
    count = 0
    num = 0
    if x<2:
        return False
    elif x==2:
        return True
    else:
        while count <= int(x/2):
            count +=1
            if x % count == 0:
                num += 1
        if num > 1:
            return False
        else:
            return True

print (is_prime(97))
