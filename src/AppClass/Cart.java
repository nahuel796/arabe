package AppClass;

import java.util.Arrays;

public class Cart {
    private Product[] product = new Product[]{new Product(3,200,"Fugazza")};

    public Product[] getProduct() {
        return product;
    }

    public void add(Product item) {
        this.product = Arrays.copyOf(this.product, this.product.length + 1);
        this.product[this.product.length - 1] = item;
    }
}
