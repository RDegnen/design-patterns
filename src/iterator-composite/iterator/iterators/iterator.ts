export default interface MyIterator<T> {
  hasNext(): boolean
  next(): T
}