import { Tooltip } from 'bootstrap'
import {ref} from "vue";

export const tooltip = {

  mounted(el: any, binding: any) {
    const title = ref<string>("");
    if(el['data-bs-original-title']) {
      title.value = el['data-bs-original-title'];
    }
    if(binding.arg && binding.arg == "copy" && el.dataset.bsOriginalTitle ) {
      el.classList.add("cursor-copy");
      el.addEventListener('click', () => {
        navigator.clipboard.writeText(el.dataset.bsOriginalTitle);
      })
    }
    const tooltip = new Tooltip(el);
  }

}
