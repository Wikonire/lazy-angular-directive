import {Observable} from 'rxjs';

const hasSupport = 'IntersectionObserver' in window;

export function inView(
    element: Element,
    options: IntersectionObserverInit = {
        root: null,
        threshold: 0.5,
    }) {
    return new Observable(subscriber => {
        console.log(hasSupport)
        if (!hasSupport) {
            subscriber.next(true);
            subscriber.complete();
        }
        const observer = new IntersectionObserver(([entry]) => {
            console.log(entry)
            subscriber.next(entry.isIntersecting)
        }, options);
        observer.observe(element);
        console.log(element)
        return() => observer.disconnect();
    })
}
