import * as React from 'react';
import Svg, {Rect, Defs, Pattern, Use, Image} from 'react-native-svg';
const WithdrawIcon = props => (
  <Svg
    width={52}
    height={52}
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}>
    <Rect width={52} height={52} fill="url(#pattern0_6_3)" />
    <Defs>
      <Pattern
        id="pattern0_6_3"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}>
        <Use xlinkHref="#image0_6_3" transform="scale(0.00195312)" />
      </Pattern>
      <Image
        id="image0_6_3"
        width={512}
        height={512}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAATr1AAE69QGXCHZXAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAHaBJREFUeJzt3XvUZXld3/l3VUPT0A2i3IwgIoiAIEriBZAFIpooEfGGiSMmJhM1JAGjazJm7p1kjJM1k0QTokYzriWYQJCLFxYqUUDHUbxMREQiGiJeB1giKHcUav7Y9aypVKq6z/M85+zfOef3eq31XV1dXXWe7/5V9fP9nN/eZ+8CYFaXDqResKsFmNnF0Q0AAOsTAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAndYXQDO3Zz9aDL9ZHV3apbqjtXd71cx74GsLZ/Ur16dBPAbTuW4Xex+oTqcdWnVQ+uPq5l6APr+r4EANh7hxoALrQM+s+pHls9prr70I4A4IAcUgC4WD2qekr1FS3v8AGAMziEAPDg6m9UT6vuO7gXADgK+xoALlRPqr6m+uLqhrHtAMBx2bcAcGP116pnVQ8Z3AsAHK19CQAXqi+tvrnlI3sAwA7tQwD47OofVX96dCMAMIuRAeBjq++o/uzAHgBgSiNuBXyh5eK+X8rwB4Ah1t4BeFD1XdUTV/66AMAV1twB+OvV6zL8AWC4NXYA7lQ9u+XjfQDAHth1ALhf9aKW+/YDAHtil6cAnlj9YoY/AOydXQWAL6heVt1zR68PAJzDLgLA01u2/W/awWsDAFuw7QDwN6vvaT/uMAgAXMc2A8B/33K1/4ibCwEAp7CtYf3V1Tdt6bUAgB3bRgB4SvVtW3gdAGAl5w0An149L+f8AeCgnCcAfHzLR/1u3lIvAMBKzhoAbqqeX33EFnsBAFZy1gDw7OpR22wEAFjPWQLAl1f/9bYbAQDWc9oA8PDqu3bRCMCRuiW3RT9G96qeMbqJ8zjN1fsXq3+Vi/4ANnVz9UPVR7Y8IO3NY9thS+5V/Xj1idXHVH93bDtnc5odgGdWj95VIwBH5ubqpdVnVg+tXtkSBDhsVw7/qm+s/rdx7ZzdpgHgo6t/sMtGAI7IlcP/hBBw+K4e/icOMgRsGgD+eXXXXTYCcCSuNfxPCAGH63rD/8TBhYBNAsBTLxcAt+2W6ke69vA/8dDq5S0DhcNwe8P/xDdWt+68my25vQBwQ/UP12gE4MCdXPD3uA1+7SdWP5GdgEOw6fA/8b90IDsBtxcA/qvqE9ZoBOCA3da2//U8rHpFQsA+O+3wP3EQpwNuKwDcUP0PazUCcKDOMvxPCAH766zD/8Teh4DbCgB/tXrIWo0AHKDzDP8TQsD+Oe/wP7HXIeB6AeAO1f+4ZiMAB2aTC/429bDqR3Nh4D64V0sgO+/wP7G3FwZeLwB8QXX/NRsBOCCnueBvU4/MhYGjnbzzf8SWX3cvLwy8XgA46PsbA+zQNrb9r8fpgHG2te1/PXt3OuBaAeBB1Wet3QjAAdjl8D8hBKxv18P/xF6FgGsFgGdc5+cBZrbG8D8hBKxnreF/Ym9CwNWD/k7VVw3oA2CfbfOCv02dXBjoUcK7c++2e8HfpvbywsDPqy4dYb2n+rGW+xo8teVWnB9e3XE7ywYcsVuq/6tx379+qd2FgNHfmzetF+zg2O9d/fLg47p1B8d1Zt/R+D/obdb/3bKj4UFGwFmMHv4ntasQMPq4Nq1tB4B9GP4ndeuWj+1MLla/1/jF2Eb9VPWE7S4PMJl9Gf4ntYsQMPqYNq1tBoB9Gv4ndesWj+9MHt34RThvvb36K9WFLa8NMJd9G/4nte0QMPp4Nq1tBYB9HP4ndeuWjvFMvvkaDR1S/Xz1wK2vCjCbfR3+J/WathcCRh/LprWNALDPw/+kbt3CcZ7JL2zQ3L7WD1V32f6SAJPZ9+F/UtsKAaOPY9M6bwA4hOF/Uree81hP7c7VB87Z9Kh6ccuzCwDO41CG/0ltIwSMPoZN6zwB4JCG/0ndeo7jPbXH7uAA1qhXVTdtfzmAyRza8D+p84aA0f1vWmcNAIc4/E/q1jMe86l9wwoHs+16c+6SBZzfzdUrG/897ax1ngsDR/e+aZ0lABzy8D+pVe4Y+PxBB3fW+lD1pJ2sBDCTQ33nf3WddSdgdN+b1mkDwL2r1+1B39uoW0957KfytOq39+AgT1PP3clKADM5luF/UmcJAaN73rROEwCOafif1K2nOP5TGX1gp633VffdyUoAszi24X9Spw0Bo/vdtDYNAMc4/E/q1g3X4FRGH9Rp69t3sQjANA79nP/t1WlCwOheN61NAsAxnPO/vdr6NQGjD+i09fBtLwAwjWN95391vaa6xwbrMbrPTev2AsAxv/O/um69nbU4ldEHc5r6hW0eODCVG6qfbPz3sbVqkxAwusdN67YCwEzD/1LLRfCffhvrsbGL23iRFf3A6AaAg/XB6ntbvonO4JOqH293jxLeB/duOcZZdoYvVX+7+tltvuCh1Gds66CBaX1Ny7uo0d/P1qrbuiZgdG+b1rV2AGY4539lfah61jXW4VxGH9Sm9cGWWxYDnNczmysE/GLXPh0wuq9N6+oAcJ/m2/bf+vBvDw5s0/pPuzh4YFp2Asb3tGldGQC889+i0Qe3af3ErhYAmNbsOwGj+9m0TgKAd/5bNvoAN62X7moBgKnNvBMwupdN6wV5578Tow9y03rxrhYAmN6sOwGj+9i0XlX9yh70sVatMvwbdHBnqR/d1QIANGcIGN2D+i9rteHfSge0jXr1rhYA4LLZQoDar1p1+Lejg9hFvW1XCwBwhdmuCVD7UasP/7bU+Fp17x2tAcCV7ASoNWvI8O+MzY6qL97RGgBczU6AWqOGDf9DexbAZ49uAJjGd7bcd/3S6EY4Wpda/o79s5ENHEq9pbrjbpYB4JrsBKhd1LB3/lcavQinrafsZhkArutZCQFqe7UXw7/GL8Rp66d3swwAt+lrEwLU+Wtvhn+NX4yz1JN2shIAt81OgDpP7dXwr/ELcpb6lVwLAIxhJ0CdpfZu+Nf4RTlr3bqDtQDYhJ0AdZray+Ff4xfmrPUn1RN3sB4AmxAC1Ca1t8O/xi/Oeeod1SO3vyQAG3E6QN1W7fXwr/ELdN76rerBW18VgM3YCVDXqr0f/jV+kbZRb6k+ddsLA7Chr0sIUP9/HcTwr/ELta16X8v/hAAjOB2gLnVAw7/GL9a26xXVw7a6QgCbEQLmroMa/jV+wXZR76++vXrA9pYJYCNOB8xZBzf8a/yi7bL+pPrh6unVvbe1YAC3QwiYqw5y+F9oaX4Gl6rXVb9c/Vr15upd1QdGNgUT+Y/VL45uYkVfV/3Tlu+zHK9LDX6k71nNFACAsT5QfUn10tGNrOhrW05HCgHH6WCHf9XF0Q0A07ixelH1+aMbWdG/rJ6RN1rH6KCHfwkAwLqEAI7BwQ//EgCA9QkBHLKjGP4lAABjzBoCvj4h4JAdzfAvAQAYZ8YQ8K0JAYfqqIZ/CQDAWLOGgG9ICDgkRzf8SwAAxpsxBHxLQsChOMrhXwIAsB+EAPbR0Q7/EgCA/SEEsE+OeviXAADsFyGAfXD0w78EAGD/CAGMNMXwLwEA2E9CACNMM/xLAAD2lxDAmqYa/uVpgMD+e1/1hdWPjm5kRX+75VHCrGO64V892Q4AsO9uqn6w+XYCvn50E5OYcfh/bvUiAQA4BLOeDhACdmvW4f+S6iYBADgUQgDbNPXwLxcBAodFCGAbph/+JQAAh0cI4DwM/8sEAOAQCQGcheF/BQEAOFRCAKdh+F9FAAAOmRDAJgz/axAAgEMnBHBbDP/rEACAYyAEcC2G/20QAIBjIQRwJcP/dggAwDERAijDfyMCAHBshIC5Gf4bEgCAYyQEzMnwPwWPAwaO2YyPEv7r1bOrG0Y3srIPVn+r+o7RjazoydWLqzud5TcLAMCx+0D1pdUPjW5kRU+tnlfdeXQjK3l/9ZeqF4xuZEVnfud/QgAAZjBjCHh09dLqHqMb2bF3tASenxzdyIrOPfzLNQDAHG5seXf450Y3sqJXV4+vXj+6kR16ffUZzTX8n1x9f+cc/iUAAPO4qfrB6imjG1nR66s/03FeFPfc6tM67oBztc9tubj1TOf8r+YUADCbGS8MrPoL1b+sPmx0I+f0hy0XOj5/dCMrO9cFf9diBwCYzYw7AVX/tnpY9Z3Vhwb3clYvrR7ZfMN/q+/8T9gBAGY144WBJz615bTAo0c3sqHXVM+sfmp0IwNs5YK/67mklFKT1nub68LAK12svqJluI7+c7hevbZ6evPd0+DEk1tOWe1qfYf/ASul1Mh6f/OdDrja41p2Qkb/WZzUT7X8mVzY5UHvuc9tCag7W2enAACWd1lfVP3I6EYGe3j15ZfrgSt/7Te2nNt/fvW6lb/2vtn6BX/XIgAALISA/9ynt6zH46tPqe645df/4+rnWz7D/5Lq57b8+odqleFfAgDAlYSAa7u5emz1mOqh1cddrg/f8Pe/vfr16j9Wv1r9dPUz1Xu23ulhW234lwAAcDUhYHP3bLmvwN1bQsLNLTPlPdW7Wwb/H1ZvG9XgAVl1+JcAAHAtM39EkPXt9KN+1+NGQAD/pRurF+bTAezekOFfAgDA9QgB7Nqw4V8CAMBtEQLYlaHDvwQAgNsjBLBtw4d/CQAAmxAC2Ja9GP4lAABsSgjgvPZm+JcAAHAaQgBntVfDvwQAgNMSAjitvRv+JQAAnIUQwKb2cviXAABwVkIAt2dvh38JAADnIQRwPXs9/EsAADgvIYCr7f3wLwEAYBuEAE4cxPAvAQBgW4QADmb4lwAAsE1CwLwOaviXAACwbTdWL6g+b3QjrObzq+/vgIZ/CQAAu3BTy0D40tGNsHNPbdn1udPoRk5LAADYjRur51dfNbgPdufpHejwLwEAYJduqP7P6hmjG2Hrvq56TnWH0Y2clQAAsFsXq2+rvjXfc4/BherW6lsu//hgXagujW4CYBIvrr6yes/oRjiTm6t/3XLe/+AJAADrenX1RdWbRzfCqdy35cLOTxndyLbYjgJY16Or11ZPGt0IG3tC9Qsd0fAvAQBghHtVP1J9Ywd+HvnIXWi52O/Hqo8c3MvWOQUAMNb3V19d/f7oRvjP3Kf67urJoxvZFQEAYLy3Vn+t+qHRjVAtt/X97upPjW5kl5wCABjv3tUPVN9e3TK4l5ndrfpX1Q935MO/7AAA7Jvfaznv/MLRjUzmKdWzq/uPbmQtAgDAfnpp9Ter3xrdyJG7b8tNmr5kdCNrEwAA9tc7q39U/ZPqvYN7OTY3V3+n+m8u/3g6AgDA/vvd6u+3PFfgg4N7OXQXW97t/x9NtN1/LQIAwOF4TfX3Wi4Y9L37dE4G//9cPWJwL3tBAAA4PK+r/veW+9LbEbhtF6s/3xKcHjW4l70iAAAcrl9tuYDtudW7B/eyb26pvqp6VvXgsa3sJwEA4PC9vfqulvsIvGlsK8M9sHpGy42V7j64l70mAAAcjw9VP1M9p/o31bvGtrOaO1efX31Ny0OWPF9hAwIAwHH6o+ol1Yurl1fvG9vO1t255Za9X1x9Ye6geGoCAMDxe1f1suoHW55s95ax7ZzZR1afU31B9XlN+vn9bREAAOZyqXptSxB4ZfXq6m1DO7q+e1WPrp7YMvh9fG+LBAAAfq362ernq19p+ZjhW1fu4T4tA/7h1ae2DP6PW7mHqQgAAFzL71evb/lUwZtanknwOy2nD/7gcm16keEt1T2qj2gZ9PerPuZyPaD6hMv/nRUJAACc1fur97R8+uAPr/pvd2+ZMTdXN67cFxsQAABgQhdHNwAArE8AAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMKE7jG4AgL3xjuoN1a9Wb6zeWb378s/ffLluqT66ekj18dX9h3TKuQkAAPN6d/Wj1SurV1SvP8Nr3Lv6zOqJ1ZMTCA7GherS6CYAWM2lloH/nOpF1bu2+NoXq8dXf6l6WstuAXtKAACYw4eql1V/v/r5Fb7ePapnXq6PWOHrcUoCAMDxe0XLID7LFv953a36n6qvq+444OtzHQIAwPF6S/UN1b8Z3Uj1iOrbq8eNboSFAABwnF5VfUX1e4P7uNKF6r+tvqm6YXAv0xMAAI7LpeoftJzr/+DgXq7nSdXzq3uObmRmAgDA8fhg9Yzqu0Y3soGHtnwE0ccGBxEAAI7D+6svq35wdCOncL/q5dXDRjcyIwEA4PB9qPqL1feNbuQMPqr66epjRjcyG88CADh8X99hDv9aLlL8nOqtoxuZjQAAcNj+RfXPRjdxTr/esoOxrxctHiUBAOBwvbb6O6Ob2JJXVt88uomZuAYA4DC9t/qklnfPx+KG6ierx45uZAZ2AAAO0zd1XMO/llMAX1v98ehGZiAAAByeX6/+8egmduR1Ldc1sGNOAQAcni+pXjy6iR26e/Wm6sMG93HU7AAAHJb/UH3/6CZ27B3Vs0c3cewEAIDD8g9bbvxz7L6levfoJo6ZAABwOP6gw73hz2n9fvXC0U0cMwEA4HA8r+We/7N47ugGjpmLAAEOx2OqV49uYkUXq99seWgQW2YHAOAwvK36udFNrOxD1Q+PbuJYCQAAh+EVzXHx39VeObqBYyUAAByGV41uYJBX5FT1TggAAIfh349uYJC3tDwymC0TAAAOw6+NbmCgN4xu4BgJAAD7760t9wCYlQCwAwIAwP773dENDPY7oxs4RgIAwP575+gGBpv9+HdCAADYf7MPwNmPfycEAID994HRDQz2vtENHCMBAGD/3WV0A4PdMrqBYyQAAOy/u45uYLC7jW7gGAkAAPvvw0Y3MJgAsAMCAMD++9jm/n79oNENHKOZ/0IBHIq7NPcjcR86uoFjJAAAHIaHjW5gkAvVx49u4hgJAACH4TGjGxjkE3MNwE4IAACH4YmjGxjks0Y3cKwEAIDD8Ojq5tFNDDBr8Nk5AQDgMNxYPWV0Eyu7W/U5o5s4VgIAwOH4ytENrOxp1Z1HN3GsLlSXRjcBwEb+pPro6s2jG1nJq6onjG7iWNkBADgcd6ieObqJlTyqevzoJo6ZHQCAw/JH1QOqtw/uY9deUn3h6CaOmR0AgMNyt+pZo5vYsU+unjq6iWNnBwDg8Ly3enj1G6Mb2YEL1Stz7n/n7AAAHJ47V/90dBM78pcz/FdhBwDgcH159fzRTWzRfavXVPcc3cgMBACAw/Wu6lOrXx3dyBbcUL08t/5djVMAAIfrlup5LY8LPnT/a4b/qgQAgMP2ydULWu4RcKi+uvq7o5uYjVMAAMfhe6q/0uF9T//C6oUtpwBYkR0AgOPwl6vnVHcc3cgpfFHLKQzDfwABAOB4PL16WXXX0Y1s4G+1vPO/aXQjsxIAAI7LZ1evbrlR0D66qfrW6p9nBg3lGgCA4/TO6hnVvx7dyBUeWv3b6pGjG0H6AjhWd62+t/qx6iGDe7lzdWv1ixn+e8MOAMDxe2/1j1tuH/wHK37di9WXVd9UPXDFr8sGBACAebyz+raWc/D/7w6/zp2qv1j9d43ffeA6BACA+Xyw+nctpwh+oOWWwud1Q/WY6iurp1UfvoXXZIcEAIC5/XH1c9Urqp+u3lD9ZvWh2/l992i5qO9Pt9zC9wkZ+gdFAADgau+r3tiyM/DO6h3VzS3PHrilun9LAOCACQAAMCEfAwSACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAExIAAGBCAgAATEgAAIAJCQAAMCEBAAAmJAAAwIQEAACYkAAAABMSAABgQgIAAExIAACACQkAADAhAQAAJiQAAMCEBAAAmJAAAAATEgAAYEICAABMSAAAgAkJAAAwIQEAACYkAADAhAQAAJiQAAAAE7pYXRrdBACwrovVB0Y3AQCsSwAAgAkJAAAwoYvVu0Y3AQCs62L1ttFNAADrEgAAYEIXq98f3QQAsK6L1e+NbgIAWNfF6jdHNwEArOti9abRTQAA67pY/cboJgCAdV2obqzeefmfAMAETu4E+IbRjQAA6zl5HPBrh3YBAKzqJAC8ZmgXAMCqTgLAzwztAgBY1YXL/7xT9Y7qpoG9AAArOdkBeH/170c2AgCs5+IVP37FsC4AgFVdGQB+ZFgXAMCqLlzx4xuqt1YfMagXAGAlV+4AfLB6+ahGAID1XLzq3184pAsAYFUXrvr3m6q3VHcb0AsAsJKrdwDeV710RCMAwHquDgBVz129CwBgVVefAqglFLyxesC6rQAAa7nhGj93qeUagCeu3AsAsJJr7QBUfVT1puqO67UCAKzlWjsAVe+sHlx90oq9AAArud4OQNUnVr90O78GADhA1/oUwIlfrn58rUYAgPXc3rv7z6h+ao1GAID1XO8agBO/XT2m+rgVegEAVrLJ+f1Pq1694a8FAA7A7e0AVP1u9bDqETvuBQBYyabv6u9XvaG6yw57AQBWsskOQNUftTwp8Ak77AUAWMlpzuvfpXpt9aAd9QIArOS27gNwtfdUX93yrAAA4IBtegrgxJtanhL4yVvvBABYzVk+2vfhLbcI/ugt9wIArOQ0pwBOvL36iuqDW+4FAFjJaU8BnPitlosCH7fFXgCAlZzn7n53aHlY0OO31AsAsJLz3t73PtX/U913C70AACs5yzUAV3pL9ReqD2yhFwBgJWe9BuBKv129sfriPDAIAA7CNgJA1etahv9nbun1AIAd2lYAqPqJ6v7Vo7b4mgDADmwzAFS9tHpIHh0MAHttF+fs71i9uPr8Hbw2ALAF5/0UwLX8cfVl1ct28NoAwBZs+xTAiT+pXlg9tHr4jr4GAHBGuwoAtTwr4MUtDw1yYSAA7JFdBoCqS9UPVO+o/lzuEwAAe2HXAeDEz1a/Uf35Fb8mAHAda78j/5TqRS33CwAABtnFpwBuyy+0hIBXrPx1AYArjNiOf0/1vJbHCX9GrgsAgNWNHr6Pqb63euDgPgBgKqMvyPud6jnVfapPbnwgAYAp7NPAfXz1nS3PEgAAdmj0DsCVfrP67pa7CH5ayzMFAIAd2KcAUMtzBF5VfU91r+qR7dcuBQAchX0LACfeWb3kct0zzxMAgK3a1wBw4i3V91X/rrpf9aDsCADAue17ADjx2y0fF3xJS88Pb7mPAABwBof6bvqjqr96uT52cC8AcHAONQCcuFh9dvWV1RdUdxvbDgAchkMPAFe6qfrc6mktjx6+x9h2AGB/HVMAuNINLQ8d+rzqsy7/+M5DOwKAPXKsAeBqN1Z/pnpsyy2HH1F9wuWfB4DpzBIAruWOLR8rfGD1gMv1US2nDu55uT7s8q+9S3Wn1TsEgB35/wCZCdfiZrUk9QAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
);
export default WithdrawIcon;
