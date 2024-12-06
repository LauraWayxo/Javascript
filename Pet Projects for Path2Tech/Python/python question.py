
def convert_distance(km):
	m = km * 1000  
	m = my_trip_meters
	km = my_trip_kilometers
	return my_trip_meters



my_trip_kilometers = 55

my_trip_meters = convert_distance(my_trip_kilometers)


print("The distance in meters is " + str(my_trip_meters))


#Question from Conditionals Quiz 7
def calculate_storage(filesize):
    block_size = 4096 
    # Use floor division to calculate how many blocks are fully occupied
    full_blocks = filesize // block_size 
    # Use the modulo operator to check whether there's any remainder
    partial_block_remainder = filesize % block_size
    # Depending on whether there's a remainder or not, return
    # the total number of bytes required to allocate enough blocks
    # to store your data.
	elif filesize <= block_size
		return block_size
	if partial_block_remainder > 0:
        return block_size+(full_blocks*block_size)
    else: return  block_size*full_blocks

print(calculate_storage(1))    # Should be 4096
print(calculate_storage(4096)) # Should be 4096
print(calculate_storage(4097)) # Should be 8192
print(calculate_storage(6000)) # Should be 8192
