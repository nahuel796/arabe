import AppClass.Cart;
import AppClass.GUI;
import AppClass.Product;

public class Main {

    public static void main(String[] args) {

        Cart cart = new Cart();
        Product product = new Product(1, 250, "Muzzarella");
        Product product2 = new Product(2, 350, "Calabreza");


        cart.add(product);
        cart.add(product2);

        for (Product element : cart.getProduct()) {
            System.out.println(element.getTitle());
        }

        GUI gui = new GUI();


    }
}
