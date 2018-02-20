class Node
  attr_accessor :value, :next

  def initialize(value = nil, next_node = nil)
    @value = value
    @next = next_node
  end
end

class LinkedList

  # a linked list starts with a single node with no next_node
  # save head to an instance variable to use with the rest of the class methods.
  def initialize(val)
    @head = Node.new(val, nil)
  end

  def append(val)
    self.tail.next = Node.new(val,nil)
  end

  def prepend(val)
    current = @head
    new = Node.new(val, current)
    @head = new
  end

  def size
    current = @head
    count = 1
    while current.next != nil
      current = current.next
      count += 1
    end
    count
  end

  def head
    @head
  end

  def tail
    # create a copy of the current head so you don't destroy the initial reference
    # this pattern will be used throughout
    current = @head
    #loop through all the nodes until we find the node with no next_node -- aka the last node
    while current.next != nil
      current = current.next
    end
    # we break out of the loop when current.next === nil so current is the last node in the list
    current
  end

  def at(index)
    # we want to return nil if the index given is longer than the linked list
    return nil if index > self.size - 1
    current = @head
    while index > 0
      current = current.next
      index -= 1
    end
    current.value
  end

  def pop
    # like the #pop array method, this stack-simulating method will return
    # the last element while removing it from the list
    current = @head
    prev = nil
    while current.next != nil
      prev = current
      current = current.next
    end
    prev.next = nil
    current
  end

  def contains?(val)
    i = 0
    current = @head
    answer = false
    while i < self.size
      current.value === val ? (answer = true) : nil
      current = current.next
      i += 1
    end
    answer
  end

  def find(data)
    # returns the index of the node containing data, or nil if not found
    i = 0
    current = @head
    answer = nil
    while i < self.size
      current.value === data ? (answer = i)  : nil
      current = current.next
      i += 1
    end
    answer
  end

  def to_s
    # represent your LinkedList objects as strings, so you can print them out and preview them in the console
    # the format should be: ( data ) -> ( data ) -> ( data ) -> nil
    i = 0
    list = ""
    current = @head
    # the .nil? method was new to me in Ruby, decided to try it out here
    until current.nil?
      list += "( #{current.value} ) -> "
      current = current.next
      i += 1
    end
    list += "nil"
  end

  def reverse(current)
    # return the input if the list is only one node long or nil
    return current if current == nil or current.next == nil
    # solve recursively
    next_node = current.next
    new_head = reverse(current.next)
    next_node.next = current
    # place old head at end of list and make it's next node nil
    current.next = nil
    return new_head
  end

end

# l = LinkedList.new(5)
# l.append(6)
# l.prepend(4)
# l.prepend(3)
# l.head
# l.tail
# l.pop
# l.at(2)
# l.find(4)
# l.find(23)
# l.to_s
# l.reverse
