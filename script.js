const PRIVATE_KEY = "w3XrjZ9pdHE0MnYO1";
const SERVICE_ID = "service_aja7wp8";
const TEMPLATE_ID = "template_kpdbamg";

(function () {
    emailjs.init(PRIVATE_KEY);
  })();

function SendMail() {
    const params = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        mensagem: document.getElementById("mensagem").value
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PRIVATE_KEY) // Use suas informações de Service ID e Template ID aqui
        .then(function () {
            // aqui colocar o gif de loading - promisse
            window.location.href = "obrigado.html";            
        })
        .catch(function (error) {
            console.error("Erro ao enviar email:", error);
        });
}



document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const desktopNav = document.querySelector('.desktop ul');
    const mobileNav = document.querySelector('.mobile ul');
    const menuItems = document.querySelectorAll('.mobile a, .desktop a');
    const logo = document.getElementById('logoLink');

    const closeMenu = () => {
        mobileNav.classList.remove('show');
    };

    menuIcon.addEventListener('click', () => {
        mobileNav.classList.toggle('show');
    });

    mobileNav.addEventListener('mouseleave', () => {
        closeMenu();
    });

    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            const targetId = (event.currentTarget.getAttribute('href') || '').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                event.preventDefault();

                let extraSpace;

                // Ajuste para cada seção específica
                switch (targetId) {
                    case 'trabalhos':
                        extraSpace = 120; // Ajuste conforme necessário para a seção 'trabalhos'
                        break;
                    case 'atuacoes':
                        extraSpace = 102; // Ajuste conforme necessário para a seção 'atuacoes'
                        break;
                    case 'orcamentos':
                        extraSpace = 80; // Ajuste conforme necessário para a seção 'orcamentos'
                        break;
                    case 'contatos':
                        extraSpace = 80; // Ajuste conforme necessário para a seção 'contatos'
                        break;
                    // Adicione mais casos conforme necessário para outras seções
                    default:
                        extraSpace = 0; // Valor padrão para outras seções
                }

                const targetPosition = targetElement.offsetTop - extraSpace;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                closeMenu();
            }
        });
    });

    logo.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        closeMenu();
    });

});

 
  // Ocultar ou exibir o ícone com base no scroll
  var whatsappIcon = document.getElementById('whatsapp-icon');

  window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      whatsappIcon.style.display = 'block';
    } else {
      whatsappIcon.style.display = 'none';
    }
  };
