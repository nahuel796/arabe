package AppClass;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class GUI extends JFrame {

    public GUI(){
        this.setTitle("La Arabe");
        this.setSize(600, 400);

        // Create JText
        final JTextArea textBox = new JTextArea("miraa");

        // Create JButton and JPanel
        JButton button = new JButton("Muzzarella");
        JPanel panel = new JPanel();

        // Add button to JPanel
        panel.add(button);
        // And JPanel needs to be added to the JFrame itself
        this.getContentPane().add(panel);

        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setVisible(true);

        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
            }
        });
    }

}
