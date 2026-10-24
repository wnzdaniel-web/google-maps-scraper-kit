#!/bin/bash
echo "--- CORRECAO DE USUARIO E ENVIO ---"
read -p "1. Digite seu usuario correto (ex: wnzdaniel-web): " usuario
read -s -p "2. Cole seu Token do GitHub: " token
echo ""
echo "Conectando ao repositorio: https://github.com/$usuario/google-maps-scraper-kit.git"

git remote remove origin 2>/dev/null
git remote add origin "https://$usuario:$token@github.com/$usuario/google-maps-scraper-kit.git"

if git push -u origin master; then
    echo ""
    echo "🎉 SUCESSO! Codigo enviado para o seu GitHub!"
    echo "Agora basta abrir o Lovable.dev e importar o repositorio."
else
    echo ""
    echo "❌ Erro ao enviar. Verifique se o repositorio 'google-maps-scraper-kit' existe na sua conta."
fi
