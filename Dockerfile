# Usa Nginx come base
FROM nginx:alpine

# Rimuovi i file di default di nginx per evitare conflitti
RUN rm -rf /usr/share/nginx/html/*

# Copia tutti i tuoi file nella cartella corretta
# Nota lo spazio tra il punto e lo slash iniziale
COPY . /usr/share/nginx/html/

# Esponi la porta 80
EXPOSE 80
