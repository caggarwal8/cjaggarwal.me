<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
    <div class="w-100">
      <h1 class="mb-0">
        Chandan
        Aggarwal
      </h1>
      <div class="subheading mb-5">
        Dartmouth College · (650) 248-3593 · 1075 Yorkshire Drive, Los Altos, CA 94024 ·
        <a
          href="mailto:aggarwalcj@gmail.com"
        >aggarwalcj@gmail.com</a>
      </div>
      <p
        class="lead mb-5"
      >Hi, I’m Chandan! I’m a student at Dartmouth College interested in Computer Science and Economics. I’m an experienced programmer familiar with Java, C++, Python, Javascript, HTML, and CSS, and I enjoy picking up new technologies. I really love developing and creating new products, and I’m super excited about the possibility of joining DALI Lab!</p>
      <div class="social-icons">
        <a href="https://www.linkedin.com/in/chandan-aggarwal-2819a9124/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
          <font-awesome :icon="['fab', 'linkedin']"/>
        </a>
        <a href="https://github.com/caggarwal8" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <font-awesome :icon="['fab', 'github']"/>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.social-icons a {
  cursor: pointer;
  display: inline-block;
  height: 3.5rem;
  width: 3.5rem;
  background-color: var(--secondary);
  color: #fff !important;
  border-radius: 100%;
  text-align: center;
  font-size: 1.5rem;
  line-height: 3.5rem;
  margin-right: 1rem;

  @media (max-width: 380px) {
    margin-right: 0.5rem;
  }

  @media (max-width: 350px) {
    margin-right: 0.2rem;
  }
}

.social-icons a:last-child {
  margin-right: 0;
}

.social-icons a:hover {
  background-color: var(--primary);
}
</style>
