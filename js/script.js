const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
        }, { threshold: 0.1 });
        document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

        function toggleTheme() {
            document.body.classList.toggle('light-theme');
            const icon = document.querySelector('.theme-toggle i');
            icon.classList.toggle('fa-sun');
            icon.classList.toggle('fa-moon');
        }

        function toggleShareMenu() { document.getElementById('shareMenu').classList.toggle('active'); }

        const WHATSAPP_NUM = "558299971804";

        function escolherPlano(plano) {
            const msg = `Fala Douglas! Tenho interesse no plano *${plano}*. Gostaria de saber mais.`;
            window.open(`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(msg)}`, '_blank');
        }

        function enviarFicha(e) {
            e.preventDefault();
            
            const n = document.getElementById('nome').value;
            const id = document.getElementById('idade').value;
            const sx = document.getElementById('sexo').value;
            const p = document.getElementById('peso').value;
            const a = document.getElementById('altura').value;
            const r = document.getElementById('restricoes').value || "Nenhuma";
            const m = document.getElementById('medicamentos').value || "Nenhum";
            const act = document.getElementById('nivel_atividade').value;
            const sn = document.getElementById('sono').value;
            const pl = document.getElementById('plano_interesse').value;
            const ob = document.getElementById('objetivo').value;

            const msg = `*--- FICHA DE AVALIAÇÃO DM ---*%0A%0A` +
                        `*DADOS PESSOAIS*%0A` +
                        `*Nome:* ${n}%0A*Idade:* ${id} anos | *Sexo:* ${sx}%0A` +
                        `*Peso:* ${p}kg | *Altura:* ${a}cm%0A%0A` +
                        `*HISTÓRICO DE SAÚDE*%0A` +
                        `*Restrições:* ${r}%0A*Medicamentos:* ${m}%0A%0A` +
                        `*HÁBITOS*%0A` +
                        `*Atividade:* ${act}%0A*Sono:* ${sn}%0A%0A` +
                        `*INTERESSE*%0A` +
                        `*Plano:* ${pl}%0A*Objetivo:* ${ob}`;

            window.open(`https://wa.me/${WHATSAPP_NUM}?text=${msg}`, '_blank');
        }

        function shareLink(platform) {
            const url = encodeURIComponent(window.location.href);
            if (platform === 'whatsapp') {
                window.open(`https://api.whatsapp.com/send?text=Confira a consultoria do Douglas Marques: ${url}`, '_blank');
            } else {
                alert("Copie o link da barra de endereços para o Instagram!");
            }
        }