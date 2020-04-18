import MenuItem from "./menu-item";

export default interface Menu<T> {
  createIterator(): Iterator<T>
}