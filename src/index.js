class Toast {
  constructor() {
    this.initContainer();
  }

  initContainer() {
    this.toastContainer = document.createElement("div");
    this.toastContainer.id = "toast-container";
    document.body.appendChild(this.toastContainer);
  }

  show(message, duration = 3000) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerText = message;
    this.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("fade-out");
      toast.addEventListener("transitionend", () => {
        toast.remove();
      });
    }, duration);
  }
}

const toast = new Toast();
export default toast;
