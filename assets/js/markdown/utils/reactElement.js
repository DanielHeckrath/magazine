export default function reactElement(element) {
    // This should just override an already present element._store, which
    // exists so that the class of this object doesn't change in V8
    element._store = {
        validated: true,
        originalProps: element.props
    };
    return element;
}