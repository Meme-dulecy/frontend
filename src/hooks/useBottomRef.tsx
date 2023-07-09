import { useEffect, useMemo, useRef } from "react";

const useBottomRef = () => {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const isIntersecting = useRef<boolean>(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver((entries: Array<IntersectionObserverEntry>) => {
        isIntersecting.current = entries[0].isIntersecting;
      }, {}),
    []
  );

  const scrollToBottom = () => {
    setTimeout(() => {
      if (isIntersecting.current) {
        return;
      }

      bottomRef.current.scrollIntoView({
        block: "end",
      });

      scrollToBottom();
    }, 100);
  };

  useEffect(() => {
    if (!bottomRef.current) return;

    observer.observe(bottomRef.current);
    scrollToBottom();
  }, [bottomRef.current]);

  return {
    isIntersecting,
    bottomRef: <div ref={bottomRef} />,
  };
};

export default useBottomRef;
