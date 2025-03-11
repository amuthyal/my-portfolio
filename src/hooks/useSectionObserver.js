import { useInView } from "react-intersection-observer";

const useSectionObserver = (threshold = 0.3) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold, // Ensure section is considered "in view" when 30% visible
  });

  return { ref, inView };
};

export default useSectionObserver;
