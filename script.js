// Definindo os elementos do formulário
const productNameInput = document.getElementById("product-name");
const productDescriptionInput = document.getElementById("product-description");
const productPriceInput = document.getElementById("product-price");
const productImageInput = document.getElementById("product-image");
const productForm = document.getElementById("product-form");

// Botões de Disponibilidade
const btnYes = document.getElementById("btn-yes");
const btnNo = document.getElementById("btn-no");

// Função para lidar com o envio do formulário
const handleSubmit = (event) => {
    event.preventDefault();

    const name = productNameInput.value.trim();
    const description = productDescriptionInput.value.trim();
    const price = parseFloat(productPriceInput.value);
    const image = productImageInput.files ? productImageInput.files[0] : null;

    if (name && description && price > 0) {
        Swal.fire({
            title: 'Cadastro Finalizado!',
            text: `Produto: ${name}\nDescrição: ${description}\nPreço: R$ ${price.toFixed(2)}`,
            icon: 'success',
            confirmButtonText: 'Ok'
        });

        // Limpar o formulário
        productForm.reset();
    } else {
        Swal.fire({
            title: 'Erro!',
            text: 'Por favor, preencha todos os campos corretamente.',
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    }
};

// Função para alternar a disponibilidade do produto
const toggleAvailability = (isAvailable) => {
    if (isAvailable) {
        btnYes.classList.add("active");
        btnNo.classList.remove("active");
    } else {
        btnNo.classList.add("active");
        btnYes.classList.remove("active");
    }
};

// Adicionar eventos de clique aos botões de disponibilidade
btnYes.addEventListener("click", () => toggleAvailability(true));
btnNo.addEventListener("click", () => toggleAvailability(false));

// Adicionar o evento de envio do formulário
productForm.addEventListener("submit", handleSubmit);
