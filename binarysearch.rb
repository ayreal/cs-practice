
def binary_search(n, arr)
  # this presumes starting with a sorted array
  # first step is to find i, the middle of the array
  # each time you don't find the number in the set, you halve the set and search again.

  first = 0
  last = arr.count - 1

  while first <= last
    i = (first + last) / 2
    if arr[i] === n
      return true
      break
    elsif arr[i] > n
      last = i - 1
    else arr[i] < n
      first = i + 1
    end
  end
  return false
end
